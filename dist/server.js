"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/server.ts
var import_fastify = __toESM(require("fastify"));
var import_cors = __toESM(require("@fastify/cors"));
var server = (0, import_fastify.default)({ logger: true });
server.register(import_cors.default, {
  origin: "*"
});
var teams = [
  {
    id: 1,
    name: "McLaren",
    base: "Woking, United Kingdom"
  },
  {
    id: 2,
    name: "Mercedes",
    base: "Brackley, United Kingdom"
  },
  {
    id: 3,
    name: "Red Bull Racing",
    base: "Milton Keynes, United Kingdom"
  },
  {
    id: 4,
    name: "Ferrari",
    base: "Maranello, Italy"
  },
  {
    id: 5,
    name: "Aston Martin",
    base: "Silverstone, United Kingdom"
  },
  {
    id: 6,
    name: "Alpine",
    base: "Enstone, United Kingdom"
  },
  {
    id: 7,
    name: "Williams",
    base: "Grove, United Kingdom"
  },
  {
    id: 8,
    name: "Haas",
    base: "Kannapolis, United States"
  },
  {
    id: 9,
    name: "Stake F1 Team (Sauber)",
    base: "Hinwil, Switzerland"
  },
  {
    id: 10,
    name: "Visa Cash App RB",
    base: "Faenza, Italy"
  }
];
var drivers = [
  {
    id: 1,
    name: "Max Verstappen",
    team: "Red Bull Racing"
  },
  {
    id: 2,
    name: "Lewis Hamilton",
    team: "Ferrari"
  },
  {
    id: 3,
    name: "Lando Norris",
    team: "McLaren"
  },
  {
    id: 4,
    name: "Sergio P\xE9rez",
    team: "Red Bull Racing"
  },
  {
    id: 5,
    name: "Charles Leclerc",
    team: "Ferrari"
  },
  {
    id: 6,
    name: "Oscar Piastri",
    team: "McLaren"
  },
  {
    id: 7,
    name: "George Russell",
    team: "Mercedes"
  },
  {
    id: 8,
    name: "Carlos Sainz",
    team: "Mercedes"
  },
  {
    id: 9,
    name: "Fernando Alonso",
    team: "Aston Martin"
  },
  {
    id: 10,
    name: "Lance Stroll",
    team: "Aston Martin"
  },
  {
    id: 11,
    name: "Esteban Ocon",
    team: "Alpine"
  },
  {
    id: 12,
    name: "Pierre Gasly",
    team: "Alpine"
  },
  {
    id: 13,
    name: "Alex Albon",
    team: "Williams"
  },
  {
    id: 14,
    name: "Logan Sargeant",
    team: "Williams"
  },
  {
    id: 15,
    name: "Kevin Magnussen",
    team: "Haas"
  },
  {
    id: 16,
    name: "Nico H\xFClkenberg",
    team: "Haas"
  },
  {
    id: 17,
    name: "Valtteri Bottas",
    team: "Stake F1 Team (Sauber)"
  },
  {
    id: 18,
    name: "Zhou Guanyu",
    team: "Stake F1 Team (Sauber)"
  },
  {
    id: 19,
    name: "Yuki Tsunoda",
    team: "Visa Cash App RB"
  },
  {
    id: 20,
    name: "Daniel Ricciardo",
    team: "Visa Cash App RB"
  }
];
server.get("/teams", (request, response) => __async(exports, null, function* () {
  response.type("application/json").code(200);
  return [{ teams }];
}));
server.get("/drivers", (request, response) => __async(exports, null, function* () {
  response.type("application/json").code(200);
  return [{ drivers }];
}));
server.get(
  "/drivers/:id",
  (request, response) => __async(exports, null, function* () {
    const id = parseInt(request.params.id);
    const driver = drivers.find((driver2) => driver2.id === id);
    if (!driver) {
      response.type("application/json").code(404);
      return { message: "Driver Not Found" };
    } else {
      response.type("application/json").code(200);
      return { driver };
    }
  })
);
server.get(
  "/teams/:id",
  (request, response) => __async(exports, null, function* () {
    const id = parseInt(request.params.id);
    const team = teams.find((team2) => team2.id === id);
    if (!team) {
      response.type("application/json").code(404);
      return { message: "Team Not Found" };
    } else {
      response.type("application/json").code(200);
      return { team };
    }
  })
);
server.listen({ port: 3333 }, () => {
  console.log("server init");
});
