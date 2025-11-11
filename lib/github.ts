export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  languages_url: string
  topics: string[]
  created_at: string
  updated_at: string
  stargazers_count: number
  forks_count: number
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12&type=all`, {
      cache: 'no-store', // For client-side fetching
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      }
    })
    
    if (!response.ok) {
      const errorText = await response.text()
      console.error('GitHub API Error:', response.status, errorText)
      throw new Error(`Failed to fetch GitHub repos: ${response.status}`)
    }
    
    const repos: GitHubRepo[] = await response.json()
    
    // Filter: exclude portfolio repos, but keep other repos (including forks if no other repos)
    const filteredRepos = repos.filter(repo => {
      // Exclude repos with "portfolio" in name (case insensitive)
      if (repo.name.toLowerCase().includes('portfolio')) return false
      
      return true
    })
    
    // Prefer non-forks, but include forks if we don't have enough repos
    const nonForks = filteredRepos.filter(repo => !repo.fork)
    const finalRepos = nonForks.length >= 3 ? nonForks : filteredRepos
    
    // Sort by updated date (most recent first) and take top 6
    const sortedRepos = finalRepos
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
      .slice(0, 6)
    
    console.log(`Found ${repos.length} total repos, ${filteredRepos.length} after filtering, ${nonForks.length} non-forks, showing ${sortedRepos.length}`)
    
    return sortedRepos
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    // Return empty array on error
    return []
  }
}

export async function getRepoLanguages(languagesUrl: string): Promise<string[]> {
  try {
    const response = await fetch(languagesUrl, {
      cache: 'no-store' // For client-side fetching
    })
    
    if (!response.ok) {
      return []
    }
    
    const languages: Record<string, number> = await response.json()
    return Object.keys(languages).slice(0, 4) // Get top 4 languages
  } catch (error) {
    console.error('Error fetching languages:', error)
    return []
  }
}

