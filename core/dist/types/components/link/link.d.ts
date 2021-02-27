import { EventEmitter } from '../../stencil-public-runtime';
export declare class Link {
  href: string;
  target: string;
  rel: string;
  icon: string;
  iconPosition: string;
  color: string;
  preventClick: boolean;
  clicked: EventEmitter<MouseEvent>;
  private onClick;
  render(): any;
}
