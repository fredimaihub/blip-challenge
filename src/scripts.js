const axios = require('axios')

async function getRepositoriesByLanguage(userId, language) {
    try {
        response = await axios.get(`https://api.github.com/users/${userId}/repos`)

        if (!Array.isArray(response.data)) {
            throw new Error('Unexpected response format from GitHub API.')
        }

        filteredRepos = response.data.filter(repo => repo.language === language)
        sortedRepos = filteredRepos.sort((a, b) => new Date(a.created_at) - new Date(b.created_at))

        return sortedRepos.slice(0, 4)

    } catch (error) {
        console.error('Error fetching repositories:', error.message)
        throw new Error('Failed to fetch repositories.')
    }
}


module.exports = { getRepositoriesByLanguage }