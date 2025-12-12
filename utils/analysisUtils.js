export const getValueStatus = (value, min, max) => {
    if (value === '' || value === null || value === undefined) return null;
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return null;

    const percentFromMin = ((numValue - min) / (max - min)) * 100;

    if (numValue < min * 0.7) return {
        status: 'critical-low',
        color: 'text-red-600',
        bg: 'bg-red-50',
        border: 'border-red-200',
        icon: '🔻',
        severity: 'critical'
    };
    if (numValue < min) return {
        status: 'low',
        color: 'text-orange-500',
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        icon: '📉',
        severity: 'warning'
    };
    if (numValue > max * 1.3) return {
        status: 'critical-high',
        color: 'text-red-600',
        bg: 'bg-red-50',
        border: 'border-red-200',
        icon: '🔺',
        severity: 'critical'
    };
    if (numValue > max) return {
        status: 'high',
        color: 'text-yellow-500',
        bg: 'bg-yellow-50',
        border: 'border-yellow-200',
        icon: '📈',
        severity: 'warning'
    };
    if (percentFromMin > 80 && percentFromMin < 90) return {
        status: 'optimal-high',
        color: 'text-green-500',
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: '🎯',
        severity: 'optimal'
    };
    if (percentFromMin > 10 && percentFromMin < 20) return {
        status: 'optimal-low',
        color: 'text-green-500',
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: '🎯',
        severity: 'optimal'
    };
    return {
        status: 'normal',
        color: 'text-green-500',
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: '✅',
        severity: 'normal'
    };
};