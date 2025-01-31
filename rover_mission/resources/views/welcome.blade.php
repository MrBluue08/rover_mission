<!DOCTYPE html>
<html lang="EN">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>

    </head>
    <body>
        <div class="flex items-center justify-center min-h-screen bg-gray-100">
            
            <div>
                <form action="" class="mb-8">
                    <input type="text" class="border border-black p-2 rounded mr-4">
                    <input type="submit" value="Enviar indicaciones" class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
                </form>
                <div class="overflow-x-auto overflow-y-auto max-h-96 w-full">
                    <table class="border-collapse table-auto">
                        <?php
                            for ($row = 1; $row <= 200; $row++) {
                                echo "<tr>";
                                for ($col = 1; $col <= 200; $col++) {
                                    echo "<td class='w-1.5 h-1.5 bg-red-400 border border-white'></td>";
                                }
                                echo "</tr>";
                            }
                        ?>
                    </table>
                </div>
            </div>
        </div>
    </body>
</html>
