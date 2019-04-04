function handleNavigate (e, url) {
  e.preventDefault()
  Promise.resolve(this.setState({ pageLoaded: false })).then(() => {
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.location = url
      }
    }, 400)
  })
}

export default handleNavigate
