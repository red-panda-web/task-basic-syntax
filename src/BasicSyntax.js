export function romanToInteger(str) {
    let result = 0;
    let i = 0;
    while (i < str.length) {
        switch (str[i]) {
            case 'I':
                switch (str[i + 1]) {
                    case 'V':
                        result += 4;
                        i += 2;
                        break;
                    case 'X':
                        result += 9;
                        i += 2;
                        break;
                    default:
                        result += 1;
                        i += 1;
                }
                break;

            case 'V':
                result += 5;
                i += 1;
                break;

            case 'X':
                switch (str[i + 1]) {
                    case 'L':
                        result += 40;
                        i += 2;
                        break;
                    case 'C':
                        result += 90;
                        i += 2;
                        break;
                    default:
                        result += 10;
                        i += 1;
                }
                break;

            case 'L':
                result += 50;
                i += 1;
                break;

            case 'C':
                switch (str[i + 1]) {
                    case 'D':
                        result += 400;
                        i += 2;
                        break;
                    case 'M':
                        result += 900;
                        i += 2;
                        break;
                    default:
                        result += 100;
                        i += 1;
                }
                break;

            case 'D':
                result += 500;
                i += 1;
                break;

            case 'M':
                result += 1000;
                i += 1;
                break;
        }
    }
    return result;
}
