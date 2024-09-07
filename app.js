function pesquisar() {
    let container = document.getElementById("container")
    container.style.height = "30vh"

    let container2 = document.getElementById("container2")
    container2.style.display = "flex"

    let earth = document.getElementById("earth")
    earth.style.width = "250px"
    earth.style.height = "250px"

    let border = document.getElementById("border")
    border.style.width = "190px"
    border.style.height = "190px"

    let section = document.getElementById("resultado-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    let resultados = ""

    if (!campoPesquisa) {
        section.innerHTML = `<p style="color: red;"> Nada foi encontrado. Insira um texto! </p>`
        return
    }

    let titulo = "";
    let descricao = "";
    let nomeOficial = ""
    let codigoISO = "";
    let festasNacionais = "";
    let capital = "";
    let atualPresidente = "";
    let idioma = "";
    let monetario = "";

    for (let dado of paises) {
        titulo = dado.titulo.toLowerCase()
        nomeOficial = dado.nomeOficial.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        codigoISO = dado.codigoISO.toLowerCase()
        festasNacionais = dado.festasNacionais.toLowerCase()
        capital = dado.capital.toLowerCase()
        atualPresidente = dado.atualPresidente.toLowerCase()
        idioma = dado.idioma.toLowerCase()
        monetario = dado.monetario.toLowerCase()

        campoPesquisa = campoPesquisa.toLowerCase()

        if (titulo.includes(campoPesquisa) || nomeOficial.includes(campoPesquisa) || descricao.includes(campoPesquisa) || codigoISO.includes(campoPesquisa) || festasNacionais.includes(campoPesquisa) || capital.includes(campoPesquisa) || atualPresidente.includes(campoPesquisa) || idioma.includes(campoPesquisa) || monetario.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <div class="conteudo">
                        <img src="${dado.imagem}" class="mapa">
                        <div class="espaco">
                            <div class="title">
                                <img src="${dado.bandeira}" class="bandeira">
                                <h2 class="gradient">${dado.titulo} (${dado.codigoISO})</h2>
                            </div>
                            <div class="descricao-meta">
                                <p><b>Descrição:</b> ${dado.descricao}.</p>
                                    <div class="info">
                                        <p class="item"><b>Nome oficial:</b> ${dado.nomeOficial}</p>
                                        <p class="item"><b>Capital:</b> ${dado.capital}</p>
                                        <p class="item"><b>Nome presidente:</b> ${dado.atualPresidente}</p>
                                        <p class="item"><b>Idioma:</b> ${dado.idioma}</p>
                                        <p class="item"><b>Moeda:</b> ${dado.monetario}</p>
                                        <p class="item"><b>Festas:</b> ${dado.festasNacionais}</p>
                                    </div>
                            </div>
                            <a href=" ${dado.link}" target="_blank">Mais informações</a>
                        </div>
                    </div>
                </div>
            `
        }
        if (!resultados) {
            section.innerHTML = `<p style="color: red; display:flex;"> Nada foi encontrado, insira um texto válido! Verifique acentuação e ortografia!</p>`
        } else {
            section.innerHTML = resultados
        }
    }

}