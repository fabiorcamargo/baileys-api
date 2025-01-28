module.exports = {
  apps: [
    {
      name: "my-app", // Nome do aplicativo
      script: "npm", // Comando principal
      args: "run start", // Argumentos para o comando npm
      interpreter: "none", // Evita usar um interpretador como Node.js diretamente
      env: {
        NODE_ENV: "production", // Variáveis de ambiente para produção
      },
      env_development: {
        NODE_ENV: "development", // Variáveis de ambiente para desenvolvimento
      },
      max_memory_restart: "1G", // Reinicia o aplicativo se ele ultrapassar 1GB de memória
      instances: 1, // Garante que apenas 1 instância seja executada
      exec_mode: "fork", // Usa o modo de execução em fork (único processo)
      // Configuração de CPU limitando para 1 núcleo
      node_args: "--max-old-space-size=1024", // Limita o espaço de memória do V8 para 1GB
    },
  ],
};
