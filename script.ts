interface veiculo{
    nome: string,
    placa: string,
    entrada: Date;
}

(function(){
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query);

        function patio() {
            function ler(){}

            function adicionar(veiculo: veiculo){
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
            }

            function remover(){}

            function salvar(){}

            function render(){}

            return{ ler, adicionar, remover, salvar, render };
        }

    $("#cadastrar")?.addEventListener("click", () =>{
        const nome = $("#nome")?.value;
        const placa = $("#placa")?.value;

        if(!nome || !placa){
            alert("Os campos nome e placa são obrigatórios");
            return false;
        }

        patio().adicionar({nome, placa, entrada: new Date() });
    })
})();