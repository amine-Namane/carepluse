'use client'
 export function MobileSidebarContent({
                                  selectedCategory,
                                  onCategoryChange,
                                  filters,
                                  onFilterChange,
                                  darkMode,
                                  setDarkMode,
                                  activeFilterCount,
                                  insuranceOptions,
                                  experienceOptions
                              }) {
    return (
        <div className="space-y-6">
            {/* Search Stats */}
            <Card>
                <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Active Filters</span>
                        <Badge variant="secondary">
                            {activeFilterCount} active
                        </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Showing {mockDoctors.length} doctors in your area
                    </p>
                </CardContent>
            </Card>

            {/* Categories */}
            <div>
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Stethoscope className="h-5 w-5" />
                    Specializations
                </h2>
                <ScrollArea className="h-[200px]">
                    <div className="space-y-2 pr-4">
                        {specializations.map((spec, index) => (
                            <Button
                                key={index}
                                onClick={() => onCategoryChange(spec.slug)}
                                variant={selectedCategory === spec.slug ? "default" : "ghost"}
                                className={cn(
                                    "w-full justify-between p-3 h-auto",
                                    selectedCategory === spec.slug && "bg-gradient-to-r " + spec.color
                                )}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={cn(
                                        "p-1.5 rounded-md",
                                        selectedCategory === spec.slug
                                            ? "bg-white/20"
                                            : "bg-muted"
                                    )}>
                                        {spec.icon}
                                    </div>
                                    <span>{spec.name}</span>
                                </div>
                                <Badge variant={selectedCategory === spec.slug ? "secondary" : "outline"}>
                                    {spec.count}
                                </Badge>
                            </Button>
                        ))}
                    </div>
                </ScrollArea>
            </div>

            <Separator />

            {/* Filters */}
            <Accordion type="multiple" className="w-full">
                <AccordionItem value="experience">
                    <AccordionTrigger className="text-sm font-medium">
                        Experience
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="grid grid-cols-2 gap-2">
                            {experienceOptions.map(exp => (
                                <div key={exp.value} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={`mob-exp-${exp.value}`}
                                        checked={filters.experience.includes(exp.value)}
                                        onCheckedChange={(checked) =>
                                            onFilterChange('experience', exp.value, checked)
                                        }
                                    />
                                    <Label htmlFor={`mob-exp-${exp.value}`} className="text-sm font-normal cursor-pointer">
                                        {exp.label}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="rating">
                    <AccordionTrigger className="text-sm font-medium">
                        Minimum Rating
                    </AccordionTrigger>
                    <AccordionContent>
                        <Tabs
                            defaultValue="0"
                            value={String(filters.rating)}
                            onValueChange={(value) => onFilterChange('rating', Number(value))}
                            className="w-full"
                        >
                            <TabsList className="grid grid-cols-3">
                                <TabsTrigger value="0">Any</TabsTrigger>
                                <TabsTrigger value="4">4+</TabsTrigger>
                                <TabsTrigger value="4.5">4.5+</TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="availability">
                    <AccordionTrigger className="text-sm font-medium">
                        Availability
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="mob-available-today" className="text-sm font-normal">
                                    Available Today
                                </Label>
                                <Switch
                                    id="mob-available-today"
                                    checked={filters.availableToday}
                                    onCheckedChange={(checked) =>
                                        onFilterChange('availableToday', checked)
                                    }
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <Label htmlFor="mob-video-consult" className="text-sm font-normal">
                                    Video Consultation
                                </Label>
                                <Switch
                                    id="mob-video-consult"
                                    checked={filters.videoAvailable}
                                    onCheckedChange={(checked) =>
                                        onFilterChange('videoAvailable', checked)
                                    }
                                />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="insurance">
                    <AccordionTrigger className="text-sm font-medium">
                        Insurance Providers
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
                            {insuranceOptions.map(insurance => (
                                <div key={insurance} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={`mob-ins-${insurance}`}
                                        checked={filters.insurance.includes(insurance)}
                                        onCheckedChange={(checked) =>
                                            onFilterChange('insurance', insurance, checked)
                                        }
                                    />
                                    <Label htmlFor={`mob-ins-${insurance}`} className="text-sm font-normal cursor-pointer">
                                        {insurance}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="price">
                    <AccordionTrigger className="text-sm font-medium">
                        Price Range
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">
                                    ${filters.priceRange[0]} - ${filters.priceRange[1]}
                                </span>
                            </div>
                            <Slider
                                defaultValue={filters.priceRange}
                                min={50}
                                max={300}
                                step={10}
                                value={filters.priceRange}
                                onValueChange={(value) => onFilterChange('priceRange', value)}
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

            {/* Clear Filters */}
            {activeFilterCount > 0 && (
                <>
                    <Separator />
                    <Button
                        variant="outline"
                        onClick={() => onFilterChange('clear')}
                        className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                        Clear All Filters
                    </Button>
                </>
            )}
        </div>
    );
}