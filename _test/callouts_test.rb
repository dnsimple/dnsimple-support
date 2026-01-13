# frozen_string_literal: true

require 'test_helper'

describe 'Callouts' do
  it 'renders callout blockquotes with proper classes' do
    # Build the site first if needed
    output_dir = File.expand_path('../output', __dir__)
    skip 'Run nanoc compile first' unless Dir.exist?(output_dir)

    callout_types = %w[info warning tip note danger]
    found_callouts = Hash.new(0)

    Dir.glob("#{output_dir}/**/*.html").each do |path|
      content = File.read(path, encoding: 'UTF-8')
      callout_types.each do |type|
        found_callouts[type] += 1 if content.include?("callout-#{type}")
      end
    end

    # At least one callout type should be rendered in the output
    total_callouts = found_callouts.values.sum
    assert total_callouts.positive?,
           'Expected at least one callout to be rendered. ' \
           'Ensure markdown files use > [!TYPE] syntax and callout styles are imported.'
  end

  it 'ensures callout styles are compiled into CSS' do
    css_path = File.expand_path('../output/assets/css/style.css', __dir__)
    skip 'Run nanoc compile first' unless File.exist?(css_path)

    css_content = File.read(css_path, encoding: 'UTF-8')

    assert css_content.include?('.callout'), 'Missing base .callout styles in compiled CSS'
    assert css_content.include?('.callout-info'), 'Missing .callout-info styles in compiled CSS'
    assert css_content.include?('.callout-warning'), 'Missing .callout-warning styles in compiled CSS'
    assert css_content.include?('.callout-tip'), 'Missing .callout-tip styles in compiled CSS'
  end
end
