"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_dynamodb_1 = require("aws-cdk-lib/aws-dynamodb");
class GenericTable {
    constructor(name, primaryKey, stack) {
        this.name = name;
        this.primaryKey = primaryKey;
        this.stack = stack;
        this.initialize();
    }
    initialize() {
        this.createTable();
    }
    createTable() {
        this.table = new aws_dynamodb_1.Table(this.stack, this.name, {
            partitionKey: {
                name: this.primaryKey,
                type: aws_dynamodb_1.AttributeType.STRING
            },
            tableName: this.name
        });
    }
}
exports.GenericTable = GenericTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY1RhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR2VuZXJpY1RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkRBQThEO0FBSTlELE1BQWEsWUFBWTtJQU1yQixZQUFtQixJQUFZLEVBQUUsVUFBa0IsRUFBRSxLQUFZO1FBQzdELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ08sVUFBVTtRQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ08sV0FBVztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxvQkFBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRTtZQUMxQyxZQUFZLEVBQUM7Z0JBQ1QsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVO2dCQUNyQixJQUFJLEVBQUUsNEJBQWEsQ0FBQyxNQUFNO2FBQzdCO1lBQ0QsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ3ZCLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDSjtBQXhCRCxvQ0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RhYmxlLCBBdHRyaWJ1dGVUeXBlfSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWR5bmFtb2RiXCI7XG5pbXBvcnQge1N0YWNrfSBmcm9tIFwiYXdzLWNkay1saWJcIjtcblxuXG5leHBvcnQgY2xhc3MgR2VuZXJpY1RhYmxle1xuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgcHJpbWFyeUtleTogc3RyaW5nO1xuICAgIHByaXZhdGUgc3RhY2s6IFN0YWNrO1xuICAgIHByaXZhdGUgdGFibGU6IFRhYmxlO1xuICAgIFxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHByaW1hcnlLZXk6IHN0cmluZywgc3RhY2s6IFN0YWNrKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wcmltYXJ5S2V5ID0gcHJpbWFyeUtleTtcbiAgICAgICAgdGhpcy5zdGFjayA9IHN0YWNrO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpbml0aWFsaXplKCl7XG4gICAgICAgIHRoaXMuY3JlYXRlVGFibGUoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVUYWJsZSgpe1xuICAgICAgICB0aGlzLnRhYmxlID0gbmV3IFRhYmxlKHRoaXMuc3RhY2ssIHRoaXMubmFtZSwge1xuICAgICAgICAgICAgcGFydGl0aW9uS2V5OntcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnByaW1hcnlLZXksXG4gICAgICAgICAgICAgICAgdHlwZTogQXR0cmlidXRlVHlwZS5TVFJJTkdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWJsZU5hbWU6IHRoaXMubmFtZVxuICAgICAgICB9KVxuICAgIH1cbn0iXX0=