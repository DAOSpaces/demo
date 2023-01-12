export class Utils {
    static isMobile() {
        return window.innerWidth < 500;
    }

    static isTablet() {
        return window.innerWidth < 1000;
    }

    static isDesktop() {
        return window.innerWidth >= 1000;
    }

    static clamp(value:number, min:number, max:number) {
        return Math.min(Math.max(value, min), max);
    }

    static swap<T>(arr: T[], index1: number, index2: number): T[] {
        const newArr = [...arr];
        newArr.splice(index1, 1, arr[index2]);
        newArr.splice(index2, 1, arr[index1]);
        return newArr;
    }

    static getDayName(date:Date)
    {
        return date.toLocaleDateString("en-US", { weekday: 'long' });        
    }

    static addDays(date:Date, days:number) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
      
}
