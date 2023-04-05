class PostprocessFilter < Nanoc::Filter
  identifier :postprocess

  def run(content, params = {})
    content = content.dup
    format_table content
    lazy_load_images content
    content
  end

  private

  def format_table(content)
    content.gsub!(/<table>/, '<table class="table">')
  end

  def lazy_load_images(content)
    content.gsub!(/<img\s+(.*?)>/, '<img \1 loading="lazy">')
  end

end
