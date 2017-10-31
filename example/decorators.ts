// "emitDecoratorMetadata": true
// this will help in allowing browsers to support and register the decorator
// reflect library will be used to create the metadata

enum LoggingLevel {
    INFO, WARN, DEBUG, TRACE
}

const loggingLevel = LoggingLevel.DEBUG;

//
// This is a decorator
// Notice the factory method that exposes the calling function and it's function name and arguments
//

// ================================================================================

function LogMethod(level: LoggingLevel) : Function {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        /* console.log('target => ', target);
        console.log('propertyKey => ', propertyKey);
        console.log('descriptor => ', descriptor); */

        const originalFunction: Function = descriptor.value;
        descriptor.value = function(...args: any[]) {
            if (level <= loggingLevel) {
                console.log(`>> ${propertyKey} ${JSON.stringify(args)}` );
            }
            originalFunction.apply(this, args);
        }
    }
}

class Database {
    name = 'CTCDB';

    @LogMethod(LoggingLevel.DEBUG)
    saveData(data: any) {
        console.log(`Saving data of DB[${this.name}] - ${JSON.stringify(data)}`);
    }
}

const db = new Database();
db.saveData({ message: "Hello World"});

// ================================================================================


// Class descriptor factory
function registerOrmModel(model: Function) {
    console.log('registering ORM models ', model);
}

// Property descriptor factory
function Entity(tableName: string) : Function {
    return (target: any, propertyKey: string) => {
        // target is the class, propertyKey is the property name
        console.log(`target: ${target}, propertyKey: ${propertyKey}`);
    }
}

function Column(columnName: string) : Function {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        // registerOrmModel(target);
    }
}

@Entity("TODOS")
class ToDo {
    @Column("DESCR")
    description: string;
    done = false;
}
