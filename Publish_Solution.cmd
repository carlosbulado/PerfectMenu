SET RELEASE_FOLDER=%C:\inetpub\wwwroot\PerfectMenuRelease%
SET IONIC_APP_FOLDER=%C:\\Users\\cjb\\Documents\\Carlos\\Proj\\PerfectMenu\\app\\www%

DEL /F/Q/S "%RELEASE_FOLDER%" > NUL
dotnet publish api\api.csproj -o "%RELEASE_FOLDER%"
cd app
ionic build