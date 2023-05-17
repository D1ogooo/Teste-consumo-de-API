const url = "http://api.adviceslip.com/advice"

function getMessage() {
  axios
    .get(url)
    .then((response) => {
      const data = response.data
      const diretorio = data.slip.advice
      apiresult.textContent = JSON.stringify(diretorio)
    })
    .catch((error) => console.log(error))
}

function button_active() {
  getMessage()
}
