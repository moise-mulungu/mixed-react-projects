// classNames function is used to join class names together
export function classNames(...classes) {
    // short for: return classes.filter((class) => Boolean(class)).join(' ')
    return classes.filter(Boolean).join(' ')
  }
