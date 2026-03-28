const gifDatabase = {
            sports: [
                { id: 1, title: "Epic Soccer Goal", url: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnVrN2NuMTQwM25jMDliZnprdG1obGh0dXJpOWNmbTY3MDFqODk0cCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/t3sZxY5zS5B0z5zMIz/100.webp", tags: ["soccer", "goal", "sports", "football"] },
                { id: 2, title: "Basketball Dunk", url: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExejhpYTkxb2hlYWl1bmVrcmg4c2l6aXQxYWtiOWJvbHNtdndydTdyeiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/GKiUEvdo8Tgg2nDjd2/giphy.webp", tags: ["basketball", "dunk", "sports", "epic"] },            
                { id: 3, title: "Tennis Winner", url: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmgwdzYwa2UxZnIybGN5dnJseHhjdW1naDNzZmRua2YwMnFudm11ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0HFjeGa807RsYLu0/200.webp", tags: ["tennis", "winner", "sports", "celebration"] },
                { id: 4, title: "Football Touchdown", url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzM1eHdlOTJoa2dvZm5wNWN4cHN0NGM4ZmltOGJtbjEyMGVmdTRpOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlvtIPzPdt2usKs/giphy.gif", tags: ["football", "touchdown", "sports", "victory"] }
            ],
            movies: [
                { id: 5, title: "Action Scene", url: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXhwZWRxcWlyZ2Q3bzM3azB0anN1Mm1zemdkYm84cGJveXpnYWh1bCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4JuHCLIlZdtRMPPT58/200.webp", tags: ["action", "movies", "cinema", "blockbuster"] },
                { id: 6, title: "Movie Magic", url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDVqNzVkNG5na2Noc296NnJrcm54dmt0bW42aHJydDgzcWluMWtvMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7btPCcdNniyf0ArS/giphy.gif", tags: ["movies", "magic", "cinema", "effects"] },
                { id: 7, title: "Comedy Scene", url: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDJib2c1ZGxnbmtua3NjaWF2d29wMDVwbjRzeml5NXBhYnRmN2x4ZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oEduO55vJ0ucf4UCs/200.webp", tags: ["movies", "magic", "cinema", "effects"] },
                { id: 8, title: "Drama Scene", url: "https://media0.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MTdlOHU3NWI3ZjgwNDd5cjVrZGY3eTVzNjJmZXE3OWxrazR2dDZvcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RvXNLXpZI7Wzd1DSAE/100.webp", tags: ["drama", "movies", "emotional", "scene"] }
            ],
            memes: [
                { id: 9, title: "Dancing Cat", url: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif", tags: ["cat", "dance", "funny", "viral"] },
                { id: 10, title: "Funny Fail", url:  "https://media.giphy.com/media/xTiTnfRATMgU2tPkbe/giphy.gif", tags: ["fail", "funny", "comedy", "viral"] },
                { id: 11, title: "Funny Meme", url:  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExem9xbWx4cWNla21sMTFpazJlNWJpbHNndXdwcDZoeTBiMXNuOTg4eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qaaSZMnWkufRu/200.webp", tags: ["fail", "funny", "comedy", "viral"] },
                { id: 12, title: "Meme Reaction", url: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExem9xbWx4cWNla21sMTFpazJlNWJpbHNndXdwcDZoeTBiMXNuOTg4eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/aFTt8wvDtqKCQ/giphy.webp", tags: ["meme", "reaction", "funny", "internet"] }
            ],
            reactions: [
                { id: 13, title: "Mind Blowing", url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmVzY2c4a25xMHZtbWFkbWtkbm1mN3R4cWh3ejR5Zm85MWl5dnE4ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26ufdipQqU2lhNA4g/giphy.gif", tags: ["mind blown", "surprised", "wow", "reaction"] },
                { id: 14, title: "Excited Reaction", url: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXkybXZ6cmdzYmdrM3phYTU3bHVpdXB5NWg4dGU0YmY4YnExaHNnbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/AGGz7y0rCYxdS/200.webp", tags: ["excited", "happy", "reaction", "celebration"] },
                { id: 15, title: "Shocked Face", url: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGJrOGEwaXB3amR3ZGtza3hsbGRkaXpzN3NmcDd2OWVtaHd1OTNrZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/bGPTxLislwm3u/200w.webp", tags: ["shocked", "surprised", "reaction", "wow"] },
                { id: 16, title: "Blank Face", url: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzA2anc4M25yeXNwb2V3NnAwbDZ3eHdqZzRzM3IxYXV6d2NrejE3biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kaq6GnxDlJaBq/giphy.webp", tags: ["shocked", "surprised", "reaction", "wow"] },
            ],
            gaming: [
                { id: 14, title: "Gaming Victory", url: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExODlzMDJ3N3p3ajRuNTA5YmhvdWtpNWFjamxxYzBicmE2aHNyYXdjbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/99i04mnkzApdiAFoFf/200.webp", tags: ["gaming", "victory", "win", "esports"] },
                { id: 15, title: "Epic Gaming", url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2F4czFmdGtyZGx4eWN0dDNna2N6eTR4c253bThkaWJpM3dwOHpkdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgG50Fb7Mi0prBC/giphy.gif", tags: ["gaming", "epic", "controller", "play"] },
                { id: 16, title: "Game Over", url: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzRneGJ6ZjY0cjk4b3NiOHcweWhwd3lnajNiaGx1emMxb3IyNHd2byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/k74OUg6bPJKy2JmyoS/giphy.gif", tags: ["gaming", "game over", "retro", "arcade"] },
                { id: 16, title: "funny", url: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGlpdW9uc3kzZXRmc255cnJmNjRyN2kwa29xODkwYjF1bGh4czRvZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2x4b4X7yUnmww/200.webp", tags: ["gaming", "game over", "retro", "arcade"] },
            ],
            tech: [
                { id: 17, title: "Coding Magic", url: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzdmYzdjbms0Z290bGJsNzhzYnM2Nmg5NWFnbHo3bjUxMXIzb3o2MCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/loyBnYRFvi83ZdU86J/200.webp", tags: ["coding", "programming", "tech", "developer"] },
                { id: 18, title: "Tech Innovation", url: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3dxcXIyMXdqNWs4a3g4ZTJ3NDg1aXZxdTg1bzdjeWtmeWlmejJxayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/DPJi32ixLIe665dsWy/giphy.webp", tags: ["tech", "innovation", "future", "digital"] },
                { id: 18, title: "Digital Breakthrough", url: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzhwa2I0NnZ4cHZkMnk3ang3cGloaDkycmY2OXBteXh3aHBobGtyNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/bk8UGCysurqC2gmJ0o/200.webp", tags: ["tech", "innovation", "future", "digital"] },
                { id: 19, title: "Data Visualization", url: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG9wM2t1bjB2MDJpb2t6MzF1Y3Z4ZmsyOXJ6ano0ZGZlbDJ4dWx1biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lOfpvYQoiJW03vpJhP/giphy.webp", tags: ["data", "visualization", "tech", "analytics"] },
            ]
        };

        let currentCategory = 'all';
        let currentPage = 1;
        let isLoading = false;

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            loadGifs();
        });

        function getAllGifs() {
            const allGifs = [];
            Object.values(gifDatabase).forEach(category => {
                allGifs.push(...category);
            });
            return allGifs;
        }

        function loadGifs() {
            const gifGrid = document.getElementById('gifGrid');
            const gifs = currentCategory === 'all' ? getAllGifs() : gifDatabase[currentCategory] || [];
            
            if (currentPage === 1) {
                gifGrid.innerHTML = '';
            }

            const startIndex = (currentPage - 1) * 8;
            const endIndex = startIndex + 8;
            const gifsToShow = gifs.slice(startIndex, endIndex);

            gifsToShow.forEach(gif => {
                const gifElement = createGifElement(gif);
                gifGrid.appendChild(gifElement);
            });

            // Hide load more button if no more GIFs
            const loadMoreBtn = document.getElementById('loadMoreBtn');
            if (endIndex >= gifs.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }
        }

        function createGifElement(gif) {
            const div = document.createElement('div');
            div.className = 'gif-item fade-in';
            div.innerHTML = `
                <div class="glassmorphism rounded-2xl overflow-hidden gif-hover cursor-pointer" onclick="openModal('${gif.title}', '${gif.tags.join(', ')}', '${gif.url}')">
                    <img src="${gif.url}" alt="${gif.title}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiMxZTFiNGIiLz48dGV4dCB4PSIxNTAiIHk9IjEwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTRiOGE2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZSBOb3QgTG9hZGVkPC90ZXh0Pjwvc3ZnPg==';">
                    <div class="p-4">
                        <h3 class="font-bold text-lg mb-2">${gif.title}</h3>
                        <div class="flex flex-wrap gap-1">
                            ${gif.tags.slice(0, 2).map(tag => `<span class="text-xs bg-teal-bright/20 px-2 py-1 rounded-full">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
            return div;
        }

        function filterByCategory(event, category) {
            if (isLoading) return;
            
            currentCategory = category;
            currentPage = 1;
            
            // Update active category button
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('category-active');
            });
            event.target.classList.add('category-active');
            
            showLoading();
            setTimeout(() => {
                loadGifs();
                hideLoading();
            }, 500);
        }

        function loadMoreGifs() {
            if (isLoading) return;
            
            currentPage++;
            showLoading();
            setTimeout(() => {
                loadGifs();
                hideLoading();
            }, 500);
        }

        function searchGifs() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
            if (!searchTerm) {
                // If the search term is empty, reset the view to the 'all' category
                document.getElementById('searchInput').value = '';
                currentCategory = 'all';
                currentPage = 1;
                document.querySelectorAll('.category-btn').forEach(btn => {
                    btn.classList.remove('category-active');
                });
                document.querySelector('.category-btn[onclick*="filterByCategory(event, \'all\')"]').classList.add('category-active');
                loadGifs();
                return;
            }
            
            // De-activate all category buttons when a search is performed
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('category-active');
            });
            
            showLoading();
            
            setTimeout(() => {
                const allGifs = getAllGifs();
                const filteredGifs = allGifs.filter(gif => 
                    gif.title.toLowerCase().includes(searchTerm) ||
                    gif.tags.some(tag => tag.toLowerCase().includes(searchTerm))
                );
                
                const gifGrid = document.getElementById('gifGrid');
                gifGrid.innerHTML = '';
                
                if (filteredGifs.length === 0) {
                    gifGrid.innerHTML = '<div class="col-span-full text-center py-12 text-gray-400"><p class="text-xl">No GIFs found for "' + searchTerm + '"</p><p class="mt-2">Try a different search term</p></div>';
                    document.getElementById('loadMoreBtn').style.display = 'none';
                } else {
                    filteredGifs.forEach(gif => {
                        const gifElement = createGifElement(gif);
                        gifGrid.appendChild(gifElement);
                    });
                    document.getElementById('loadMoreBtn').style.display = 'none';
                }
                
                hideLoading();
            }, 800);
        }

        function handleSearchKeypress(event) {
            if (event.key === 'Enter') {
                searchGifs();
            }
        }

        function showLoading() {
            isLoading = true;
            document.getElementById('loadingIndicator').classList.remove('hidden');
        }

        function hideLoading() {
            isLoading = false;
            document.getElementById('loadingIndicator').classList.add('hidden');
        }

        function openModal(title, tags, gifUrl) {
            const modal = document.getElementById('modal');
            const modalTitle = document.getElementById('modalTitle');
            const modalTags = document.getElementById('modalTags');
            const modalGif = document.getElementById('modalGif');
            
            modalTitle.textContent = title;
            modalGif.src = gifUrl;
            modalGif.alt = title;
            
            // Create tag elements
            modalTags.innerHTML = '';
            tags.split(', ').forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.className = 'text-sm bg-teal-bright/20 px-3 py-1 rounded-full font-medium border border-teal-bright/30';
                tagElement.textContent = tag;
                modalTags.appendChild(tagElement);
            });
            
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
        }
        
        function closeModal() {
            const modal = document.getElementById('modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = 'auto';
        }
        
        // Close modal on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Infinite scroll
        window.addEventListener('scroll', function() {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1000) {
                if (!isLoading && document.getElementById('loadMoreBtn').style.display !== 'none') {
                    loadMoreGifs();
                }
            }
        });