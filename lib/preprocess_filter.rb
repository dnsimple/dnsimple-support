class PreprocessFilter < Nanoc::Filter
  identifier :preprocess

  REGEXP_MARKERS = /<(tip|info|note|warning)>(.*?)<\/\1>/m

  def run(content, params = {})
    content = content.dup
    format_callouts content
    format_markers content
    content
  end

  private

  # Converts GitHub/Obsidian-style callouts (e.g., > [!NOTE]) to XML-style tags
  # that can be processed by format_markers. Supports NOTE, INFO, TIP, WARNING.
  def format_callouts(content)
    # Process line by line to accurately detect callout boundaries
    lines = content.split("\n")
    result = []
    i = 0

    while i < lines.length
      line = lines[i]

      # Check if this line starts a callout
      if line =~ /^> \[!(NOTE|INFO|TIP|WARNING)\]\s*$/
        type = $1.downcase
        callout_lines = []
        i += 1

        # Collect all following lines that start with "> " (with space) or just ">" (empty callout line)
        while i < lines.length
          if lines[i] =~ /^> (.+)$/
            # Line with content after "> "
            callout_lines << $1
            i += 1
          elsif lines[i] =~ /^>\s*$/
            # Empty callout line (just "> " or ">")
            callout_lines << ""
            i += 1
          else
            # Stop when we hit a line that doesn't start with ">"
            break
          end
        end

        # Convert to XML tag
        cleaned_content = callout_lines.join("\n").strip
        result << %(<#{type}>#{cleaned_content}</#{type}>)
      else
        result << line
        i += 1
      end
    end

    content.replace(result.join("\n"))
  end

  def format_markers(content)
    content.gsub!(REGEXP_MARKERS) { %(<div class="marker marker-#{$1}" markdown="1">#{$2}</div>) }
  end

end
