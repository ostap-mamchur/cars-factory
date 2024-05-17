import { CarBuilder } from "./builder/CarBuilder";
import { Director } from "./builder/Director";
import { Controller } from "./controller/Controller";
import { Dealer } from "./dealer/Dealer";
import { CarPartsFactory } from "./factory/CarPartsFactory";
import { AccessorStorage } from "./storages/AccessorStorage";
import { BodyStorage } from "./storages/BodyStorage";
import { CarStorage } from "./storages/CarStorage";
import { EngineStorage } from "./storages/EngineStorage";
import { Supplier } from "./supplier/Supplier";

/**
 * SUPPLIER APP
 */
const carPartsFactory = new CarPartsFactory();
const engineStorage = new EngineStorage();
const bodyStorage = new BodyStorage();
const accessorStorage = new AccessorStorage();

const supplier = new Supplier(carPartsFactory, 10, engineStorage, bodyStorage, accessorStorage);
supplier.start();

/**
 * BUILDER APP
 */
const carStorage = new CarStorage();
const carBuilder = new CarBuilder();
const director = new Director(carBuilder, engineStorage, bodyStorage, accessorStorage);
const controller = new Controller(carStorage, director);
controller.start();

/**
 * DEALER APP
 */
const dealer = new Dealer(carStorage);
dealer.start();