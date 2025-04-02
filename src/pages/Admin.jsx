import { Link } from "react-router-dom";

export function Admin() {
    return (
        <div className="flex flex-col w-full h-full pt-16 items-center gap-16 bg-[#393646]">
            <section className="flex flex-col justify-center items-center">
                <h1 className="text-5xl text-white font-bold">Generation Thailand</h1>
                <h2 className="text-3xl text-white font-bold">Home - Admin Sector</h2>
            </section>
            <section className="flex flex-row justify-center items-center gap-12">
                <Link to="/user"
                className="font-semibold text-lg px-4 py-2 rounded-2xl bg-[#F4EEE0] hover:cursor-pointer"
                >
                    User Home Sector
                </Link>
                <Link to="/admin"
                className="font-semibold text-lg px-4 py-2 rounded-2xl bg-[#F4EEE0] hover:cursor-pointer"
                >
                    Admin Home Sector
                </Link>
            </section>
            <section className="flex flex-col justify-center items-start gap-4">
                <h2 className="text-2xl text-white font-bold">Create User Here</h2>
                <div className="flex flex-row gap-8">
                    <input type="text" placeholder="First Name"
                    className="bg-white px-4 py-2"
                    />
                    <input type="text" placeholder="Last Name"
                    className="bg-white px-4 py-2"
                    />
                    <input type="text" placeholder="Position"
                    className="bg-white px-4 py-2"
                    />
                    <button
                    className="p-4 rounded-xl bg-blue-400 hover:cursor-pointer"
                    >
                        Save
                    </button>
                </div>
            </section>
            <table className="flex flex-col justify-center items-center w-150 bg-[#F4EEE0]">
                <tr className="flex flex-row w-full justify-evenly">
                    <th className="outline-2 p-2 w-full">First Name</th>
                    <th className="outline-2 p-2 w-full">Last Name</th>
                    <th className="outline-2 p-2 w-full">Position</th>
                </tr>
                <tr className="flex flex-row w-full justify-evenly">
                    <td className="outline-2 p-2 w-full">Alfreds Futterkiste</td>
                    <td className="outline-2 p-2 w-full">Maria Anders</td>
                    <td className="outline-2 p-2 w-full">Germany</td>
                </tr>
            </table>
        </div>
    );
}