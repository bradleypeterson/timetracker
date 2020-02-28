export class ContentSectionButton {
  constructor(
    public text: string,
    public routerLink?: string,
    public click?: (event: MouseEvent) => void,
    public color?: string,
    public href?: string,
    public disabled = false
  ) {
  }
}
