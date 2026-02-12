import fetch from "node-fetch";
import chai from "chai";
import chaiJsonSchema from "chai-json-schema";


const expect = chai.expect;
chai.use(chaiJsonSchema);

describe("API Tests Suite", function () {
    const baseURL = "https://belajar-bareng.onrender.com/";

    // JSON Schema untuk GET Users
    const usersSchema = {
        type: "object",
        required: ["page", "per_page", "total", "data"],
        properties: {
            page: { type: "number" },
            per_page: { type: "number" },
            total: { type: "number" },
            data: {
                type: "array",
                items: {
                    type: "object",
                    required: ["id", "email", "first_name", "last_name"],
                    properties: {
                        id: { type: "number" },
                        email: { type: "string" },
                        first_name: { type: "string" },
                        last_name: { type: "string" }
                    }
                }
            }
        }
    };

    // JSON Schema untuk POST Create User
    const createUserSchema = {
        type: "object",
        required: ["name", "job", "id", "createdAt"],
        properties: {
            name: { type: "string" },
            job: { type: "string" },
            id: { type: "string" },
            createdAt: { type: "string" }
        }
    };

    it("GET - List Users", async function () {
        const response = await fetch(`${baseURL}/api/users?page=2`);
        const data = await response.json();

        expect(response.status).to.equal(200);
        expect(data).to.be.jsonSchema(usersSchema);
    });

    it("POST - Create User", async function () {
        const newUser = {
            name: "morpheus",
            job: "leader"
        };

        const response = await fetch(`${baseURL}/api/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
        });

        const data = await response.json();

        expect(response.status).to.equal(201);
        expect(data).to.be.jsonSchema(createUserSchema);
    });
});
