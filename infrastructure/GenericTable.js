"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericTable = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY1RhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR2VuZXJpY1RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUE4RDtBQUk5RCxNQUFhLFlBQVk7SUFNckIsWUFBbUIsSUFBWSxFQUFFLFVBQWtCLEVBQUUsS0FBWTtRQUM3RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNPLFVBQVU7UUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNPLFdBQVc7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksb0JBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDMUMsWUFBWSxFQUFDO2dCQUNULElBQUksRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDckIsSUFBSSxFQUFFLDRCQUFhLENBQUMsTUFBTTthQUM3QjtZQUNELFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSTtTQUN2QixDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0o7QUF4QkQsb0NBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUYWJsZSwgQXR0cmlidXRlVHlwZX0gZnJvbSBcImF3cy1jZGstbGliL2F3cy1keW5hbW9kYlwiO1xuaW1wb3J0IHtTdGFja30gZnJvbSBcImF3cy1jZGstbGliXCI7XG5cblxuZXhwb3J0IGNsYXNzIEdlbmVyaWNUYWJsZXtcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIHByaW1hcnlLZXk6IHN0cmluZztcbiAgICBwcml2YXRlIHN0YWNrOiBTdGFjaztcbiAgICBwcml2YXRlIHRhYmxlOiBUYWJsZTtcbiAgICBcbiAgICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwcmltYXJ5S2V5OiBzdHJpbmcsIHN0YWNrOiBTdGFjayl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucHJpbWFyeUtleSA9IHByaW1hcnlLZXk7XG4gICAgICAgIHRoaXMuc3RhY2sgPSBzdGFjaztcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZSgpe1xuICAgICAgICB0aGlzLmNyZWF0ZVRhYmxlKCk7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlVGFibGUoKXtcbiAgICAgICAgdGhpcy50YWJsZSA9IG5ldyBUYWJsZSh0aGlzLnN0YWNrLCB0aGlzLm5hbWUsIHtcbiAgICAgICAgICAgIHBhcnRpdGlvbktleTp7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5wcmltYXJ5S2V5LFxuICAgICAgICAgICAgICAgIHR5cGU6IEF0dHJpYnV0ZVR5cGUuU1RSSU5HXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFibGVOYW1lOiB0aGlzLm5hbWVcbiAgICAgICAgfSlcbiAgICB9XG59Il19