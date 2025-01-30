export async function load({ fetch }) {
    const res = await fetch("http://localhost:5001/api/dictionary");

    if (!res.ok) {
        throw new Error("Failed to fetch dictionary data");
    }

    const data = await res.json();
    console.log("Data in load function:", data);

    return {
        data
    };
}
