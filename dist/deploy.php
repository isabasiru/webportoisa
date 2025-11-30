<?php
/**
 * Simple PHP Git Deploy Script
 * 
 * Automatically deploys changes from GitHub when a webhook is triggered.
 */

// --- CONFIGURATION ---
$repo_dir = '/home/karose10/repositories/webportoisa_final'; // Path to your git repository in cPanel
$web_root_dir = '/home/karose10/public_html'; // Path to your public_html

// Check if the request comes from GitHub (Optional but recommended security)
// For simplicity, we just check if it's a POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    die('Error: Invalid request method. Use POST.');
}

// Log the deployment attempt
$log_file = 'deploy.log';
$date = date('Y-m-d H:i:s');

// EXECUTE COMMANDS
// 1. Go to repo, pull latest changes
$output = [];
$output[] = "Deployment started at $date";
$output[] = "---------------------------";

// Pull changes from GitHub
$cmd1 = "cd $repo_dir && /usr/local/cpanel/3rdparty/bin/git pull origin main 2>&1";
exec($cmd1, $output);

// 2. Copy files to public_html (Simulating the .cpanel.yml behavior)
// Since .cpanel.yml might not trigger on command line pull without cPanel API, we copy manually
$cmd2 = "/bin/cp -R $repo_dir/dist/* $web_root_dir 2>&1";
exec($cmd2, $output);

$output[] = "---------------------------";
$output[] = "Deployment finished.";

// Save log
file_put_contents($log_file, implode("\n", $output) . "\n\n", FILE_APPEND);

echo "Deployment successful. Check deploy.log for details.";
?>
