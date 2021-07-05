interface ButtonAction {
  buttonText: string;
  eventName: string;
  iconName: string;
}

interface ActionEvent<T> {
  item: T;
  eventName: string;
}

export { ButtonAction, ActionEvent };
