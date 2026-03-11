{/* Management Carousel */}
        {activeTab === "Management" && (

          <div className="relative max-w-5xl mx-auto">

            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center"
            >
              <ChevronRight />
            </button>

            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto px-4 py-8 scroll-smooth no-scrollbar"
            >

              {cards.map((card, i) => (

                <div
                  key={i}
                  className="flex-shrink-0 w-80 rounded-2xl p-6 bg-gradient-to-r from-green-200 to-green-300"
                >
                  {/* Icon + Title in one line */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${card.gradient}`}
                    >
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-black">
                      {card.title}
                    </h3>
                  </div>
                
                  {/* Description */}
                  <p className="text-black text-sm">
                    {card.desc}
                  </p>
                </div>

              ))}

            </div>

          </div>

        )}

