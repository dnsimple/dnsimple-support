class PreprocessFilter < Nanoc::Filter
  identifier :preprocess

  REGEXP_MARKERS = /<(tip|info|note|warning)>(.*?)<\/\1>/m
  REGEXP_MERMAID = /```\s*mermaid\s*\n(.*?)```/m

  def run(content, params = {})
    content = content.dup
    format_markers content
    remove_mermaid_blocks content
    content
  end

  private

  def format_markers(content)
    content.gsub!(REGEXP_MARKERS) { %(<div class="marker marker-#{$1}" markdown="1">#{$2}</div>) }
  end

  # Removes mermaid code blocks (```mermaid ... ```) from the content during preprocessing.
  # This allows mermaid blocks to remain in source files as reference documentation,
  # but prevents them from appearing in the rendered output.
  def remove_mermaid_blocks(content)
    content.gsub!(REGEXP_MERMAID, '')
  end

end
