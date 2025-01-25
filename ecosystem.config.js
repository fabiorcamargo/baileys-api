module.exports = {
    apps: [
      {
        name: "my-app", // Nome da aplicação
        script: "npm",
        args: "start", // Comando npm start
        exec_mode: "cluster", // Modo cluster para usar múltiplos núcleos
        instances: 1, // Define o uso de 1 CPU
        max_memory_restart: "1G", // Reinicia o app ao exceder 1 GB de memória
        env: {
          NODE_ENV: "production", // Define o ambiente
        },
      },
    ],
  };
  