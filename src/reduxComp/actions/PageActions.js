export const BUY_TOOL = 'BUY_TOOL';

export function setBuy(tool) {
  return {
    type: BUY_TOOL,
    payload: {
      title: tool.title,
      id: Date.now(),
      info: tool.info,
      img: tool.img,
      url: tool.url,
    }
  }
}
