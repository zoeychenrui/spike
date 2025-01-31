export async function load({ fetch }) {
    const res = await fetch("https://dictionary-s96x.onrender.com/api/dictionary");

    if (!res.ok) {
        throw new Error("Failed to fetch dictionary data");
    }

    const data = await res.json();
    console.log("Data in load function:", data);

    return {
        data
    };
}
