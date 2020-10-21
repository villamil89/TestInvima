import { Injectable } from "@angular/core";
import { isNullOrUndefined } from "util";

@Injectable({ providedIn: 'root' })
export class UtilitiesFnService {

    public formToDto = function (form, entity) {
        if (!!form && !!entity) {
            if (!!Object.keys(form) && !!Object.keys(entity)) {
                for (let index = 0; index < Object.keys(form).length; index++) {
                    var key = Object.keys(form)[index];
                    if (!isNullOrUndefined(key)) {
                        var element = Object(form)[key];
                        if (!!element) {
                            Object(entity)[key] = this.currencyToNumber(element);
                        }
                    }
                }
            }
        }
        return entity;
    };

    public currencyToNumber(element: any): any {
        if (isNaN(element))
            if (element.indexOf('$') == 0) {
                const value = Number(element.replace(/[^0-9.-]+/g, ''));
                if (!isNaN(value))
                    return value;
                else
                    return element;
            } else
                return element;
        return element;
    }

    public dtoToForm = function (form, entity) {
        var keys = Object.keys(entity);
        if (keys.length > 0) {
            for (let index = 0; index < keys.length; index++) {
                if (this.validateKey(Object.keys(form), keys[index]))
                    form[keys[index]].setValue(entity[keys[index]]);
            }
        }
        return form;
    };

    public validateKey = function (entity, key) {
        let band = false;
        for (let index = 0; index < entity.length; index++) {
            if (entity[index] == key) {
                band = true;
                break;
            }
        }
        return band;
    };

    public loadNvpToValue = function (list, item) {
        return list.find(function (element) {
            return element.value == item;
        });
    };

    public calculateAge = function (birthday) {
        let age = (new Date().getTime() - new Date(birthday).getTime()) / 31557600000;
        age = Math.floor(age);
        return age;
    };

    public calculateDiffDate = function (startDate: Date, endDate: Date) {
        var formatDay = 1000 * 60 * 60 * 24;
        var utc1 = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        var utc2 = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
        return Math.floor((utc2 - utc1) / formatDay);
    };

    public addDayToDate = function (startDate: Date, days: number): Date {
        startDate = new Date(startDate);
        var utc = Date.UTC(startDate.getFullYear(), startDate.getMonth(), (startDate.getDate() + days + 1));
        return new Date(utc);
    };

    public compareDataToEntity = function (data: any[], Entity: any[]) {
        for (let idx = 0; idx < data.length; idx++) {
            const element = !!data[idx].tipo ? data[idx].tipo.codigo : '';
            for (let idy = 0; idy < Entity.length; idy++) {
                if (Entity[idy].code === element) {
                    Entity[idy].value = data[idx].aplica.toString();
                    break;
                }
            }
        }
        return Entity;
    };

    public deleteItemByEntity(entity: any, item: any): any[] {
        entity.splice(entity.indexOf(item), 1);
        return entity;
    }

    public updateItemByEntity(entity, item: any, index: number): any[] {
        if (index >= 0)
            return entity[index] = item;
        else
            return entity.push(item);
    }

    public filterItemByListNvp(list: any[], element: any): any {
        var aux = list.filter(item => {
            return item.code == element;
        });
        return !!aux ? aux[0] : {};
    }

    public filterItemByName(list: any[], element: any): any {
        var aux = list.filter(item => {
            return item.name == element;
        });
        return !!aux ? aux[0] : {};
    }

    public filterItemByProperty(list: any[], element: any): any {
        var aux = list.filter(item => {
            return item.reportNumber == element;
        });
        return !!aux ? aux[0] : {};
    }

    public validateString(value) {
        return !!value ? String(value) : '';
    }

    public getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public base64ToBlob = function (base64, tipo) {
        var decodedPdfContent = atob(base64);
        var byteArray = new Uint8Array(decodedPdfContent.length);
        for (var idx = 0; idx < decodedPdfContent.length; idx++) {
            byteArray[idx] = decodedPdfContent.charCodeAt(idx);
        }
        var blob = new Blob([byteArray], { type: tipo });
        return blob;
    };

    public b64_to_utf8 = function (str) {
        return decodeURIComponent(escape(window.atob(str)));
    };

    public firstUpperCase = function (text: string): string {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    };

    public removeDuplicateItem(list: any[]) {
        return list.filter((value, index, items) => {
            return items.findIndex(value => JSON.stringify(value) === JSON.stringify(value)) === index;
        });
    }

    public addItemToList(list: any[]): any[] {
        var notworkingArr = [];
        for (let idx = 0; idx < list.length; idx++) {
            notworkingArr[idx] = list[idx];
        }
        return notworkingArr;
    }

}
