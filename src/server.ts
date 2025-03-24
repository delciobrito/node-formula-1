import fastify from "fastify";
import cors from "@fastify/cors"

const server = fastify({ logger: true });

server.register(cors, {
  origin: "*"
})

const teams = [
  {
    id: 1,
    name: "McLaren",
    base: "Woking, United Kingdom",
  },
  {
    id: 2,
    name: "Mercedes",
    base: "Brackley, United Kingdom",
  },
  {
    id: 3,
    name: "Red Bull Racing",
    base: "Milton Keynes, United Kingdom",
  },
  {
    id: 4,
    name: "Ferrari",
    base: "Maranello, Italy",
  },
  {
    id: 5,
    name: "Aston Martin",
    base: "Silverstone, United Kingdom",
  },
  {
    id: 6,
    name: "Alpine",
    base: "Enstone, United Kingdom",
  },
  {
    id: 7,
    name: "Williams",
    base: "Grove, United Kingdom",
  },
  {
    id: 8,
    name: "Haas",
    base: "Kannapolis, United States",
  },
  {
    id: 9,
    name: "Stake F1 Team (Sauber)",
    base: "Hinwil, Switzerland",
  },
  {
    id: 10,
    name: "Visa Cash App RB",
    base: "Faenza, Italy",
  },
];

const drivers = [
  {
    id: 1,
    name: "Max Verstappen",
    team: "Red Bull Racing",
  },
  {
    id: 2,
    name: "Lewis Hamilton",
    team: "Ferrari",
  },
  {
    id: 3,
    name: "Lando Norris",
    team: "McLaren",
  },
  {
    id: 4,
    name: "Sergio Pérez",
    team: "Red Bull Racing",
  },
  {
    id: 5,
    name: "Charles Leclerc",
    team: "Ferrari",
  },
  {
    id: 6,
    name: "Oscar Piastri",
    team: "McLaren",
  },
  {
    id: 7,
    name: "George Russell",
    team: "Mercedes",
  },
  {
    id: 8,
    name: "Carlos Sainz",
    team: "Mercedes",
  },
  {
    id: 9,
    name: "Fernando Alonso",
    team: "Aston Martin",
  },
  {
    id: 10,
    name: "Lance Stroll",
    team: "Aston Martin",
  },
  {
    id: 11,
    name: "Esteban Ocon",
    team: "Alpine",
  },
  {
    id: 12,
    name: "Pierre Gasly",
    team: "Alpine",
  },
  {
    id: 13,
    name: "Alex Albon",
    team: "Williams",
  },
  {
    id: 14,
    name: "Logan Sargeant",
    team: "Williams",
  },
  {
    id: 15,
    name: "Kevin Magnussen",
    team: "Haas",
  },
  {
    id: 16,
    name: "Nico Hülkenberg",
    team: "Haas",
  },
  {
    id: 17,
    name: "Valtteri Bottas",
    team: "Stake F1 Team (Sauber)",
  },
  {
    id: 18,
    name: "Zhou Guanyu",
    team: "Stake F1 Team (Sauber)",
  },
  {
    id: 19,
    name: "Yuki Tsunoda",
    team: "Visa Cash App RB",
  },
  {
    id: 20,
    name: "Daniel Ricciardo",
    team: "Visa Cash App RB",
  },
];

// declaração de rota
server.get("/teams", async (request, response) => {
  response.type("application/json").code(200);
  return [{ teams }];
});

// declaração de rota
server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200);
  return [{ drivers }];
});

interface DriverParams {
  id: string;
}

// filtrar por id e retornar nome do piloto
server.get<{ Params: DriverParams }>(
  "/drivers/:id",
  async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((driver) => driver.id === id);

    if (!driver) {
      response.type("application/json").code(404);

      return { message: "Driver Not Found" };
    } else {
      response.type("application/json").code(200);

      return { driver };
    }
  }
);

// filtrar por id e retornar nome da equipe
server.get<{ Params: DriverParams }>(
  "/teams/:id",
  async (request, response) => {
    const id = parseInt(request.params.id);
    const team = teams.find((team) => team.id === id);

    if (!team) {
      response.type("application/json").code(404);

      return { message: "Team Not Found" };
    } else {
      response.type("application/json").code(200);

      return { team };
    }
  }
);

// rodar servidor
server.listen({ port: 3333 }, () => {
  console.log("server init");
});
