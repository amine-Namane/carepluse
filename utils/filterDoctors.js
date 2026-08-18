const TODAY_DAY = new Date().getDay();

export function filterDoctors(
    doctors = [],
    query = '',
    category = '',
    filters = {}
) {
    // Always ensure we are working with an array
    let result = Array.isArray(doctors) ? [...doctors] : [];

    const q = String(query || '').trim().toLowerCase();
    const normalizedCategory = String(category || '')
        .trim()
        .toLowerCase();

    // ── Text search ─────────────────────────────────────────
    if (q) {
        result = result.filter((doctor) => {
            const name = String(doctor.name || '').toLowerCase();

            const specialization = String(
                doctor.specialization || ''
            ).toLowerCase();

            const expertise = Array.isArray(doctor.expertise)
                ? doctor.expertise
                : [];

            return (
                name.includes(q) ||
                specialization.includes(q) ||
                expertise.some((item) =>
                    String(item).toLowerCase().includes(q)
                )
            );
        });
    }

    // ── Category / Specialization ───────────────────────────
    if (
        normalizedCategory &&
        normalizedCategory !== 'all' &&
        normalizedCategory !== 'foryou'
    ) {
        result = result.filter((doctor) => {
            const doctorSpecialization = String(
                doctor.specialization || ''
            )
                .trim()
                .toLowerCase();

            return (
                doctorSpecialization === normalizedCategory
            );
        });
    }

    // ── Experience ───────────────────────────────────────────
    if (filters?.experience?.length > 0) {
        result = result.filter((doctor) => {
            const years = parseInt(
                doctor.experience_years || 0,
                10
            );

            return filters.experience.some(
                (min) => years >= Number(min)
            );
        });
    }

    // ── Rating ───────────────────────────────────────────────
    if (filters?.rating > 0) {
        result = result.filter(
            (doctor) =>
                Number(doctor.rating || 0) >=
                Number(filters.rating)
        );
    }

    // ── Available today ─────────────────────────────────────
    if (filters?.availableToday) {
        result = result.filter((doctor) =>
            (doctor.schedules ?? []).some(
                (slot) =>
                    Number(slot.day) === TODAY_DAY
            )
        );
    }

    // ── Video available ─────────────────────────────────────
    if (filters?.videoAvailable) {
        result = result.filter(
            (doctor) =>
                doctor.consultation_type === 'video' ||
                doctor.consultation_type === 'both'
        );
    }

    // ── Insurance ────────────────────────────────────────────
    if (filters?.insurance?.length > 0) {
        result = result.filter((doctor) =>
            filters.insurance.some((insurance) =>
                (doctor.insurance ?? []).some(
                    (doctorInsurance) =>
                        String(doctorInsurance)
                            .toLowerCase() ===
                        String(insurance).toLowerCase()
                )
            )
        );
    }

    // ── Price range ─────────────────────────────────────────
    if (filters?.priceRange?.length === 2) {
        result = result.filter((doctor) => {
            const price = parseFloat(
                doctor.price || 0
            );

            return (
                price >= Number(filters.priceRange[0]) &&
                price <= Number(filters.priceRange[1])
            );
        });
    }

    return result;
}