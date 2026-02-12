import fetch from "node-fetch";

describe("API Tests Suite", function () {
    const baseURL = "https://reqres.in";

    it("CREATE - Create User Baru", async function () {
        const newPost = {
            name: "morpheus",
            job: "leader"
        };

        // hit
        const response = await fetch(`${baseURL}/api/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost),
        });
    });
});
