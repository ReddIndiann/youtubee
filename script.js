// $(document).ready(function(){
//     var API_KEY = "";
//     var channelInfo = '';

//     $("#form").submit(function(event){
//         event.preventDefault();
//         var search = "a"; // Using a broad search query to ensure results
//         channelSearch(API_KEY, search, 50); // Increasing maxResults for a better chance of finding channels
//     });

//     function channelSearch(key, search, maxResults){
//         $.get("https://www.googleapis.com/youtube/v3/search", {
//             key: key,
//             type: 'channel',
//             part: 'snippet',
//             maxResults: maxResults,
//             q: search,
//             regionCode: 'US'
//         }).done(function(data){
//             console.log('Search Results:', data);
//             var channelIds = data.items.map(item => item.id.channelId).join(",");
//             if (channelIds) {
//                 getChannelDetails(key, channelIds);
//             } else {
//                 $("#videos").html("<p>No channels found.</p>");
//             }
//         }).fail(function(jqXHR, textStatus, errorThrown){
//             console.error('Error fetching search results:', textStatus, errorThrown);
//         });
//     }

//     function getChannelDetails(key, channelIds){
//         $.get("https://www.googleapis.com/youtube/v3/channels", {
//             key: key,
//             part: 'snippet,statistics',
//             id: channelIds
//         }).done(function(data){
//             console.log('Channel Details:', data);
//             $("#videos").empty(); // Clear previous results
//             data.items.forEach(item => {
//                 if (item.statistics.subscriberCount >= 60000) {
//                     channelInfo = `
//                     <div class="p-4 bg-white mb-4 shadow-lg rounded-lg">
//                         <h3 class="text-xl font-semibold">${item.snippet.title}</h3>
//                         <p class="text-gray-600">Subscribers: ${item.statistics.subscriberCount}</p>
//                         <p class="text-gray-600">Channel ID: ${item.id}</p>
//                         <img src="${item.snippet.thumbnails.default.url}" alt="${item.snippet.title}" class="rounded">
//                     </div>`;
//                     $("#videos").append(channelInfo);
//                 }
//             });
//             if ($("#videos").children().length === 0) {
//                 $("#videos").html("<p>No channels with 60k or more subscribers found.</p>");
//             }
//         }).fail(function(jqXHR, textStatus, errorThrown){
//             console.error('Error fetching channel details:', textStatus, errorThrown);
//         });
//     }
// });
