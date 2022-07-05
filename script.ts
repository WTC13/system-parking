interface veiculo{
    nome: string,
    placa: string,
    entrada: Date;
}

(function(){
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query);

        function patio() {
            function ler(): veiculo[]{
                return localStorage ? JSON.parse(localStorage.patio) : [];
            }

            function salvar(veiculos: veiculo[]){
                localStorage.setItem("patio", JSON.stringify(veiculos));
            }

            function adicionar(veiculo: veiculo, salva?: boolean){
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${veiculo.nome}</td>
                    <td>${veiculo.placa}</td>
                    <td>${veiculo.entrada}</td>
                    <td>
                        <button class="delete" data-placa="${veiculo.placa}">X</button>
                    </td>
                `;

                $("#patio")?.appendChild(row);


                if(salva) salvar([...ler(), veiculo])
            }

            function remover(){}

            function render(){
                $("#patio")!.innerHTML = "";
                const patio = ler();

                if(patio.length){
                    patio.forEach(veiculo => adicionar(veiculo))
                }
            }

            return{ ler, adicionar, remover, salvar, render };
        }
    patio().render();
    $("#cadastrar")?.addEventListener("click", () =>{
        const nome = $("#nome")?.value;
        const placa = $("#placa")?.value;

        if(!nome || !placa){
            alert("Os campos nome e placa são obrigatórios");
            return false;
        }

        patio().adicionar({nome, placa, entrada: new Date() }, true);
    })
})();