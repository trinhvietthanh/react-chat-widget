export type ElementType = (...args: any) => JSX.Element;

type BaseMessage = {
  type: string;
  component: ElementType;
  sender: string;
  showAvatar: boolean;
  timestamp: Date;
  unread: boolean;
  customId?: string;
  props?: any;
}

export interface MessageTypes extends BaseMessage {
  text: string;
};

export interface MessageStreamTypes extends BaseMessage {
  text: string;
  id: string;
}

export type QuickButtonTypes = {
  label: string;
  value: string | number;
  component: ElementType;
};

export interface Link extends BaseMessage {
  title: string;
  link: string;
  target: string;
};

export interface LinkParams {
  link: string;
  title: string;
  target?: string;
}

export interface CustomCompMessage extends BaseMessage {
  props: any;
}

export interface BehaviorState {
  showChat: boolean;
  disabledInput: boolean;
  messageLoader: boolean;
};

export interface MessagesState {
  messages: (MessageTypes | Link | CustomCompMessage| MessageStreamTypes)[];
  badgeCount: number;
}

export interface MessagesStreamState {
  messages: (MessageTypes | MessageStreamTypes)[];
  badgeCount: number;
}

export interface QuickButtonsState {
  quickButtons: QuickButtonTypes[];
}

export interface ImageState {
  src: string;
  alt?: string;
  width: number;
  height: number;
}

export interface FullscreenPreviewState extends ImageState {
  visible?: boolean;
};

export interface GlobalState {
  messages: MessagesState;
  behavior: BehaviorState;
  quickButtons: QuickButtonsState;
  preview: FullscreenPreviewState;
}
