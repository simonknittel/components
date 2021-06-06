import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sk-tag',
  styleUrl: 'tag.scss',
  shadow: true
})
export class Tag {
  @Prop() description?: string

  render() {
    return (
      <div class={ `wrapper ${ this.description ? 'has-description' : '' }` } lang="en">
        <sk-typography class="content" size="14-responsive"><slot /></sk-typography>

        { this.description ?
          <sk-typography class="tooltip" size="12-responsive" innerHTML={ this.description } />
        : null }
      </div>
    )
  }
}
