import { ChangeDetectorRef, EventEmitter, AfterViewInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CalendarDay, CalendarMonth, CalendarOriginal, PickMode } from '../calendar.model';
export declare const MONTH_VALUE_ACCESSOR: any;
export declare class MonthComponent implements ControlValueAccessor, AfterViewInit {
    ref: ChangeDetectorRef;
    month: CalendarMonth;
    pickMode: PickMode;
    isSaveHistory: boolean;
    id: any;
    readonly: boolean;
    color: string;
    change: EventEmitter<CalendarDay[]>;
    select: EventEmitter<CalendarDay>;
    selectStart: EventEmitter<CalendarDay>;
    selectEnd: EventEmitter<CalendarDay>;
    _date: Array<CalendarDay | null>;
    _isInit: boolean;
    _onChanged: Function;
    _onTouched: Function;
    readonly DAY_DATE_FORMAT = "MMMM dd, yyyy";
    get _isRange(): boolean;
    constructor(ref: ChangeDetectorRef);
    ngAfterViewInit(): void;
    get value(): CalendarDay[];
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    trackByTime(index: number, item: CalendarOriginal): number;
    isEndSelection(day: CalendarDay): boolean;
    getDayLabel(day: CalendarDay): Date;
    isBetween(day: CalendarDay): boolean;
    isStartSelection(day: CalendarDay): boolean;
    isSelected(time: number): boolean;
    onSelected(item: CalendarDay): void;
}
