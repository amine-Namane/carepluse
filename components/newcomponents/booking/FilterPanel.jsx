'use client';
// components/booking/FilterPanel.jsx
// Only the accordion filter controls — no navigation, no header.
// Reads/writes filters through BookingContext.

import { Filter, Star } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useBooking } from '@/utils/BookingContext';
import { INSURANCE_OPTIONS, EXPERIENCE_OPTIONS } from '@/data/doctors';

export default function FilterPanel() {
    const { filters, handleFilterChange } = useBooking();

    const activeFilterCount = Object.entries(filters).reduce((count, [key, value]) => {
        if (key === 'priceRange') return value[0] !== 50 || value[1] !== 300 ? count + 1 : count;
        if (Array.isArray(value)) return count + value.length;
        if (typeof value === 'boolean') return value ? count + 1 : count;
        if (typeof value === 'number') return value > 0 ? count + 1 : count;
        return count;
    }, 0);

    return (
        <div className="space-y-4">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filters
                {activeFilterCount > 0 && (
                    <span className="ml-auto text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                        {activeFilterCount} active
                    </span>
                )}
            </h3>

            <Accordion type="multiple" className="w-full">
                {/* ── Experience ─────────────────────────────────────────── */}
                <AccordionItem value="experience">
                    <AccordionTrigger className="text-sm font-medium">
                        Experience
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-2 pt-1">
                            {EXPERIENCE_OPTIONS.map((exp) => (
                                <div key={exp.value} className="flex items-center gap-2">
                                    <Checkbox
                                        id={`exp-${exp.value}`}
                                        checked={filters.experience.includes(exp.value)}
                                        onCheckedChange={(checked) =>
                                            handleFilterChange('experience', exp.value, checked)
                                        }
                                    />
                                    <Label
                                        htmlFor={`exp-${exp.value}`}
                                        className="text-sm font-normal cursor-pointer"
                                    >
                                        {exp.label}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* ── Rating ─────────────────────────────────────────────── */}
                <AccordionItem value="rating">
                    <AccordionTrigger className="text-sm font-medium">
                        Minimum Rating
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex items-center gap-2 flex-wrap pt-1">
                            {[0, 4, 4.5, 5].map((rating) => (
                                <button
                                    key={rating}
                                    onClick={() => handleFilterChange('rating', rating)}
                                    className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                                        filters.rating === rating
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                >
                                    {rating === 0 ? (
                                        'Any'
                                    ) : (
                                        <>
                                            <Star className="w-3 h-3" />
                                            {rating}+
                                        </>
                                    )}
                                </button>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* ── Availability ───────────────────────────────────────── */}
                <AccordionItem value="availability">
                    <AccordionTrigger className="text-sm font-medium">
                        Availability
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-4 pt-1">
                            <div className="flex items-center justify-between">
                                <Label
                                    htmlFor="available-today"
                                    className="text-sm font-normal cursor-pointer"
                                >
                                    Available Today
                                </Label>
                                <Switch
                                    id="available-today"
                                    checked={filters.availableToday}
                                    onCheckedChange={(checked) =>
                                        handleFilterChange('availableToday', checked)
                                    }
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <Label
                                    htmlFor="video-consult"
                                    className="text-sm font-normal cursor-pointer"
                                >
                                    Video Consultation
                                </Label>
                                <Switch
                                    id="video-consult"
                                    checked={filters.videoAvailable}
                                    onCheckedChange={(checked) =>
                                        handleFilterChange('videoAvailable', checked)
                                    }
                                />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* ── Insurance ──────────────────────────────────────────── */}
                <AccordionItem value="insurance">
                    <AccordionTrigger className="text-sm font-medium">
                        Insurance Providers
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-2 max-h-44 overflow-y-auto pr-1 pt-1">
                            {INSURANCE_OPTIONS.map((ins) => (
                                <div key={ins} className="flex items-center gap-2">
                                    <Checkbox
                                        id={`ins-${ins}`}
                                        checked={filters.insurance.includes(ins)}
                                        onCheckedChange={(checked) =>
                                            handleFilterChange('insurance', ins, checked)
                                        }
                                    />
                                    <Label
                                        htmlFor={`ins-${ins}`}
                                        className="text-sm font-normal cursor-pointer"
                                    >
                                        {ins}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* ── Price Range ────────────────────────────────────────── */}
                <AccordionItem value="price">
                    <AccordionTrigger className="text-sm font-medium">
                        Price Range
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-4 pt-1">
                            <div className="flex justify-between text-sm text-muted-foreground">
                                <span>${filters.priceRange[0]}</span>
                                <span>${filters.priceRange[1]}</span>
                            </div>
                            <Slider
                                min={50}
                                max={300}
                                step={10}
                                value={filters.priceRange}
                                onValueChange={(value) =>
                                    handleFilterChange('priceRange', value)
                                }
                                className="w-full"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground">
                                <span>$50</span>
                                <span>$300</span>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            {/* ── Clear all ──────────────────────────────────────────────── */}
            {activeFilterCount > 0 && (
                <>
                    <Separator />
                    <Button
                        variant="outline"
                        onClick={() => handleFilterChange('clear')}
                        className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                        Clear All Filters
                    </Button>
                </>
            )}
        </div>
    );
}