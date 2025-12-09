# _plugins/misc.rb
require 'liquid'

module Jekyll
  module MiscFilters
    # expression filter: items | data_filter: "kind == 'paper' && region == 'international'"
    def data_filter(data, filter)
      return data unless filter.is_a?(String)

      data.clone.select do |item|
        # unwrap Jekyll Document
        item = item.data if item.is_a?(Jekyll::Document)

        # prepare local scope with item's keys
        b = binding
        b.local_variable_set("item", item)
        item.each { |k, v| b.local_variable_set(k.to_s.gsub(/[^a-z]+/i, "_").gsub(/^_|_$/, ""), v) }

        keep = true
        loop do
          begin
            keep = !!eval(filter, b)
            break
          rescue NameError => e
            b.local_variable_set(e.name.to_s.gsub(/[^a-z]+/i, "_").gsub(/^_|_$/, ""), nil)
          end
        end
        keep
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::MiscFilters)

# ---- Optional site check with html-proofer (only if gem is present) ----
begin
  require 'html-proofer'
  Jekyll::Hooks.register(:site, :post_write) do |site|
    next if site.config['proofer'] == false
    options = {
      allow_missing_href: true,
      enforce_https: false,
      ignore_files: [/.*testbed.html/],
      ignore_urls: [/fonts\.gstatic\.com/, /localhost:/, /0\.0\.0\.0:/]
    }
    begin
      HTMLProofer.check_directory(site.dest, options).run
    rescue Exception => e
      STDERR.puts e
    end
  end
rescue LoadError
  # html-proofer not installed -> silently skip
end
