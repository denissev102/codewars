function hello(name) {
    if (!name) {
      return 'Hello, World!'
    } else {
      return`Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
    }
  }