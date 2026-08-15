const TODAY_DAY = new Date().getDay();

export function filterDoctors(doctors, query, category, filters) {
    // ✅ Always ensure array

    let result = doctors;

    const q = query?.trim().toLowerCase();

    // ── Text search ─────────────────────────────────────────
    if (q) {
        result = result.filter((d) =>
            d.name?.toLowerCase().includes(q) ||
            d.specialty?.toLowerCase().includes(q) ||
            (d.expertise ?? []).some((e) =>
                e.toLowerCase().includes(q)
            )
        );
    }

    // ── Category ────────────────────────────────────────────
    if (category !== 'all' && category !== 'foryou') {
        result = result.filter(
            (d) =>
                d.specialty?.toLowerCase() === category?.toLowerCase()
        );
    }

    // ── Experience (SAFE) ───────────────────────────────────
    if (filters?.experience?.length > 0) {
        result = result.filter((d) => {
            const years = parseInt(d.experience || 0, 10);
            return filters.experience.some((min) => years >= min);
        });
    }

    // ── Rating ──────────────────────────────────────────────
    if (filters?.rating > 0) {
        result = result.filter((d) => (d.rating || 0) >= filters.rating);
    }

    // ── Available today ─────────────────────────────────────
    if (filters?.availableToday) {
        result = result.filter((d) =>
            (d.schedules ?? []).some(
                (slot) => slot.day === TODAY_DAY
            )
        );
    }

    // ── Video available ─────────────────────────────────────
    if (filters?.videoAvailable) {
        result = result.filter(
            (d) =>
                d.consultation_type === 'video' ||
                d.consultation_type === 'both'
        );
    }

    // ── Insurance ───────────────────────────────────────────
    if (filters?.insurance?.length > 0) {
        result = result.filter((d) =>
            filters.insurance.some((ins) =>
                (d.insurance ?? []).includes(ins)
            )
        );
    }

    // ── Price range ─────────────────────────────────────────
    if (filters?.priceRange?.length === 2) {
        result = result.filter((d) => {
            const price = parseFloat(d.appointment_price || 0);
            return (
                price >= filters.priceRange[0] &&
                price <= filters.priceRange[1]
            );
        });
    }

    return result;
}