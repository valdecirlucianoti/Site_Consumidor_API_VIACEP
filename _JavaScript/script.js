function consomeApiViaCep() {
    window
        .fetch('https://viacep.com.br/ws/' + document.meuForm.cep.value + '/json/')
        .then(function (returnDoFetch) {
            returnDoFetch.json().then(function (retornoTratado) {
                var { cep, logradouro, complemento, bairro,
                    localidade, uf, ibge, gia, ddd, siafi } = retornoTratado;

                document.meuForm.logradouro.value = logradouro;
                document.meuForm.complemento.value = complemento;
                document.meuForm.bairro.value = bairro;
                document.meuForm.localidade.value = localidade;
                document.meuForm.uf.value = uf;
                document.meuForm.ibge.value = ibge;
                document.meuForm.gia.value = gia;
                document.meuForm.ddd.value = ddd;
                document.meuForm.siafi.value = siafi;
            })
        })
}