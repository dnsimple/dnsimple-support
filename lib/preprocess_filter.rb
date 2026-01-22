# frozen_string_literal: true

# Nanoc filter for preprocessing content before compilation.
class PreprocessFilter < Nanoc::Filter
  identifier :preprocess

  REGEXP_MERMAID = /```\s*mermaid\s*\n(.*?)```/m

  def run(content, _params = {})
    content = content.dup
    remove_mermaid_blocks content
    content
  end

  private

  # Removes mermaid code blocks (```mermaid ... ```) from the content during preprocessing.
  # This allows mermaid blocks to remain in source files as reference documentation,
  # but prevents them from appearing in the rendered output.
  def remove_mermaid_blocks(content)
    content.gsub!(REGEXP_MERMAID, '')
  end
end
