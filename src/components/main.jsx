import Trip from "./trip";
import data from "./data";

export default function Main() {
    const trips = data.map((item) => {
        return (
            <Trip
                key={item.id}
                item={item}
            />)
    })
    return (
        <main className="trips" >
            {trips}
        </main>
    )
}